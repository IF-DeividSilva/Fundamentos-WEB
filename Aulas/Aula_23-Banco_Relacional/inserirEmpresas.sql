alter table empresas modify cnpj varchar(14);
desc empresas;

insert into empresas
	(nome, cnpj)
values
	('Agostinho_C&A', 95694186000132),
    ('Carrara_C&A', 27887148000146),
    ('Lmause Eletronicos', 01598317000134);

desc prefeitos;
select * from empresas;

insert into empresas_unidades
	(empresa_id, cidade_id, sede)
values
	(1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);