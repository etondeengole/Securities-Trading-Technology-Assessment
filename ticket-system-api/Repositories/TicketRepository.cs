using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using ticket_system_api.Interfaces;

namespace ticket_system_api.Repositories
{
    public class TicketRepository : IDatabaseHandler
    {
        private readonly string _connectionString;
        private readonly List<string> _validProperties;

        public TicketRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("DbConnection");
            _validProperties = new List<string>()
            {
                "Id", "state", "type", "title", "createdate", "description", "effort", "product", "clientdescription"
            };

            
    }

        public bool Delete<TicketRequest>(int id)
        {
            string query = File.ReadAllText(AppContext.BaseDirectory + "SQL/DeleteTicket.sql");

            using (SqlConnection connection = new(_connectionString))
            {
                connection.Open();

                using (SqlCommand command = new(query, connection) { CommandType = CommandType.Text })
                {
                    command.Parameters.Add(new SqlParameter() { ParameterName = "@Id", SqlDbType = SqlDbType.Int, Value = id });

                    var rowCount = command.ExecuteNonQuery();

                    return rowCount == 1;
                }
            }
        }

        public TicketRequest Find<TicketRequest>(object item_find)
        {
            var all = FindAll<TicketRequest>(item_find);

            if (all.Any())
                return all.First();
            else
                return default;
        }

        public ICollection<TicketRequest> FindAll<TicketRequest>(object item_find)
        {
            IList<string> whereClauses = new List<string>();
            IList<SqlParameter> parameters = new List<SqlParameter>();

            JObject o = JObject.Parse(item_find.ToString());

            foreach (JProperty prop in o.Properties())
            {
                object propValue = prop.Value;
                if (string.IsNullOrWhiteSpace(propValue.ToString()) || !_validProperties.Contains(prop.Name.ToLower()))
                    continue;

                string where = $"CONVERT(VARCHAR(MAX), {prop.Name}) = @{prop.Name}";
                whereClauses.Add(where);
                SqlParameter parameter = new() { ParameterName = $"@{prop.Name}", SqlDbType = SqlDbType.VarChar, Size = -1, Value = propValue.ToString() };
                parameters.Add(parameter);
            }

            string query = File.ReadAllText(AppContext.BaseDirectory + "SQL/GetAll.sql");

            if (whereClauses.Any())
                query = string.Concat(query, "WHERE ", String.Join(" AND ", whereClauses.ToArray()));

            DataTable data = new();

            using (SqlConnection connection = new(_connectionString))
            {
                connection.Open();

                using (SqlCommand command = new(query, connection) { CommandType = CommandType.Text })
                {
                    foreach (var parameter in parameters)
                        command.Parameters.Add(parameter);

                    using (SqlDataAdapter adapter = new(command))
                    {
                        adapter.Fill(data);
                    }
                }
            }

            if (data.Rows.Count < 1)
                return new List<TicketRequest>();

            var list = new List<Models.TicketRequest>();

            foreach (DataRow row in data.Rows)
            {
                Models.TicketRequest ticket = new Models.TicketRequest()
                {
                    Id = Convert.ToInt32(row["Id"]),
                    State = row["State"].ToString(),
                    Type = row["Type"].ToString(),
                    Title = row["Title"].ToString().Trim(),
                    Description = row["Description"].ToString().Trim(),
                    ClientDescription = row["ClientDescription"].ToString().Trim(),
                    Effort = row["Effort"].ToString().Trim(),
                    Product = row["Product"].ToString().Trim(),
                    CreateDate = Convert.ToDateTime(row["CreateDate"].ToString().Trim())
                };

                list.Add(ticket);
            }

            return (ICollection<TicketRequest>)list;
        }

        public int Insert<TicketRequest>(TicketRequest insert_item)
        {
            string query = File.ReadAllText(AppContext.BaseDirectory + "SQL/InsertTicket.sql");

            using (SqlConnection connection = new(_connectionString))
            {
                connection.Open();

                using (SqlCommand command = new(query, connection) { CommandType = CommandType.Text })
                {
                    var ticketItem = insert_item as ticket_system_api.Models.TicketRequest;

                    command.Parameters.Add(new SqlParameter() { ParameterName = "@State", SqlDbType = SqlDbType.NVarChar, Size = 300, Value = ticketItem.State });
                    command.Parameters.Add(new SqlParameter() { ParameterName = "@Type", SqlDbType = SqlDbType.NVarChar, Size = 300, Value = ticketItem.Type });
                    command.Parameters.Add(new SqlParameter() { ParameterName = "@Title", SqlDbType = SqlDbType.NVarChar, Size = 300, Value = ticketItem.Title });
                    command.Parameters.Add(new SqlParameter() { ParameterName = "@Description", SqlDbType = SqlDbType.NVarChar, Size = -1, Value = ticketItem.Description });
                    command.Parameters.Add(new SqlParameter() { ParameterName = "@Effort", SqlDbType = SqlDbType.NVarChar, Size = -1, Value = ticketItem.Effort });
                    command.Parameters.Add(new SqlParameter() { ParameterName = "@Product", SqlDbType = SqlDbType.NVarChar, Size = 300, Value = string.IsNullOrWhiteSpace(ticketItem.Product) ? Convert.DBNull : ticketItem.Product });
                    command.Parameters.Add(new SqlParameter() { ParameterName = "@ClientDescription", SqlDbType = SqlDbType.NVarChar, Size = -1, Value = string.IsNullOrWhiteSpace(ticketItem.ClientDescription) ? Convert.DBNull : ticketItem.ClientDescription });

                    var rowCount = command.ExecuteNonQuery();

                    return rowCount;
                }
            }
        }

        public bool Update<TicketRequest>(TicketRequest update_item)
        {
            string query = File.ReadAllText(AppContext.BaseDirectory + "SQL/UpdateTicket.sql");

            using (SqlConnection connection = new(_connectionString))
            {
                connection.Open();

                using (SqlCommand command = new(query, connection) { CommandType = CommandType.Text })
                {
                    var ticketItem = update_item as ticket_system_api.Models.TicketRequest;

                    command.Parameters.Add(new SqlParameter() { ParameterName = "@Id", SqlDbType = SqlDbType.Int, Value = ticketItem.Id });
                    command.Parameters.Add(new SqlParameter() { ParameterName = "@State", SqlDbType = SqlDbType.NVarChar, Size = 300, Value = ticketItem.State });
                    command.Parameters.Add(new SqlParameter() { ParameterName = "@Type", SqlDbType = SqlDbType.NVarChar, Size = 300, Value = ticketItem.Type });
                    command.Parameters.Add(new SqlParameter() { ParameterName = "@Title", SqlDbType = SqlDbType.NVarChar, Size = 300, Value = ticketItem.Title });
                    command.Parameters.Add(new SqlParameter() { ParameterName = "@Description", SqlDbType = SqlDbType.NVarChar, Size = -1, Value = ticketItem.Description });
                    command.Parameters.Add(new SqlParameter() { ParameterName = "@Effort", SqlDbType = SqlDbType.NVarChar, Size = -1, Value = ticketItem.Effort });
                    command.Parameters.Add(new SqlParameter() { ParameterName = "@Product", SqlDbType = SqlDbType.NVarChar, Size = 300, Value = string.IsNullOrWhiteSpace(ticketItem.Product) ? Convert.DBNull : ticketItem.Product });
                    command.Parameters.Add(new SqlParameter() { ParameterName = "@ClientDescription", SqlDbType = SqlDbType.NVarChar, Size = -1, Value = string.IsNullOrWhiteSpace(ticketItem.ClientDescription) ? Convert.DBNull : ticketItem.ClientDescription });

                    var rowCount = command.ExecuteNonQuery();

                    return rowCount == 1;
                }
            }
        }
    }
}