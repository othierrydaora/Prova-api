-- >> DML
-- Cadastrar um novo pet
insert into tb_pet (nm_pet)
	 values ('Rex');

-- Listar todos os pets
select 
		id_pet as id,
		nm_pet as nome
  from 	tb_pet;

-- Consultar pet (id)
select
		nm_pet as nome
  from	tb_pet
 where	id_pet = 1;


-- Alterar pet
update	tb_pet
   set	nm_pet = 'Reques'
 where id_pet = 1;