
import { con } from "./connection.js";

export async function cadastrarPet(pet) {
    const command = `
    insert into tb_pet (nm_pet)
	values (?) `;
    const [resp] = await con.query(command, [pet.nome]);
    pet.id = resp.insertId;
    return pet;
}

export async function listarPets() {
    const command = `
    select 
		    id_pet as id,
		    nm_pet as nome
      from 	tb_pet `;
    const [resp] = await con.query(command);
    return resp;
}

export async function consultarPet(id) {
    const command = `
        select
            nm_pet as nome
    from	tb_pet
    where	id_pet = ? `;
    const [resp] = await con.query(command, [id]);
    return resp[0];
}

export async function alterarPet(pet, id) {
    const command = `
    update	tb_pet
    set     nm_pet = ?
    where   id_pet = ?`;
    const [resp] = await con.query(command, [pet.nome, id]);
    return resp.affectedRows;
}
