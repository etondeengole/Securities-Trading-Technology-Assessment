﻿DROP TABLE IF EXISTS dbo.Tickets
GO

CREATE TABLE [dbo].[Tickets]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY (1,1),
	[State] NVARCHAR(300) NOT NULL,
	[Type] NVARCHAR(300) NOT NULL,
	[Title] NVARCHAR(300) NOT NULL,
	[CreateDate] DATETIME2 NOT NULL DEFAULT GETDATE(),
	[Description] NVARCHAR(MAX) NOT NULL,
	[Effort] NVARCHAR(MAX) NOT NULL,
	[Product] NVARCHAR(300),
	[ClientDescription] NVARCHAR(MAX),
	[LastUpdateDate] DATETIME2 NULL
)
GO