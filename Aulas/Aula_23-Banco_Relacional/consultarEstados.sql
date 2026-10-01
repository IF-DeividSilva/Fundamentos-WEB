-- selecionar tudo
select * from estados;

-- selecionar com filtros
select 
	nome as 'Nome do Estado', 
    sigla 
from estados
where regiao = 'Sul';

-- selecionar com filtros + ordenação    
select 
	nome, 
    regiao 
from estados
where populacao >= 10
order by populacao desc