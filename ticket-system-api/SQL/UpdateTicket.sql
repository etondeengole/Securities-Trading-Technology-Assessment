UPDATE [dbo].[Tickets]
   SET [State] = @State
      ,[Title] = @Title
      ,[Type] = @Type
      ,[LastUpdateDate] = GETDATE()
      ,[Description] = @Description
      ,[Effort] = @Effort
      ,[Product] = @Product
      ,[ClientDescription] = @ClientDescription
 WHERE [Id] = @Id