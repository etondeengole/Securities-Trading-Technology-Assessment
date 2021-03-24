INSERT INTO [dbo].[Tickets]
([State]
,[Type]
,[Title]
,[CreateDate]
,[Description]
,[Effort]
,[Product]
,[ClientDescription])
VALUES(
 @State
,@Type
,@Title
,GETDATE()
,@Description
,@Effort
,@Product
,@ClientDescription)