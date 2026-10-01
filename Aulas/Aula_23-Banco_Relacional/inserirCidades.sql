select * from estados;

insert into cidades (nome, area, estado_id)
value ('Campinas', 795, 4);

insert into cidades
	(nome, area, estado_id)
values(
    'Caruaru', 920.6, (select id from  estados where sigla = 'PE')
);

insert into cidades
	(nome, area, estado_id)
values(
    'Mirassol', 20.6, (select id from  estados where sigla = 'SP')
);

select * from cidades