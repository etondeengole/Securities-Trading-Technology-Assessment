using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace ticket_system_api.Interfaces
{
    public abstract class DatabaseContext
    {
        private readonly List<PropertyInfo> mTableFields;

        protected DatabaseContext(IDatabaseHandler database)
        {
            if (database != null)
            {
                var parentItems = typeof(DatabaseContext)
                    .GetProperties(BindingFlags.Public
                           | BindingFlags.Instance
                           | BindingFlags.DeclaredOnly).ToList();

                mTableFields = this.GetType()
                 .GetProperties(BindingFlags.Public
                              | BindingFlags.Instance
                              | BindingFlags.DeclaredOnly).ToList();

                mTableFields.AddRange(parentItems);

                System.Threading.Tasks.Parallel.ForEach(mTableFields, (table) =>
                {
                    var instance = Activator.CreateInstance(table.PropertyType, database);
                    table.SetValue(this, instance);
                });
            }
        }

        public Table<T> GetTable<T>()
        {
            return (Table<T>)mTableFields.FirstOrDefault(x => typeof(Table<T>) == x.PropertyType)?.GetValue(this);
        }
    }
}
