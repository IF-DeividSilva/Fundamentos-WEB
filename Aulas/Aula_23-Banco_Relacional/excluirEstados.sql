-- NÂo ESQUECER DO WHERE (Senão apaga a table toda kk)

delete from estados
where sigla = 'MN';

delete from estados
where id >= 1000;

select * from estados