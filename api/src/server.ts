import 'reflect-metadata'
import express from 'express'; 
import "./database";
import {router} from "./routes";

const app = express();



/**
 * http://localhost:3333/
 * / 1 Param = Rota
 * / 2 Param Request, response
 * GET == Busca
 * POST == Salvar
 * PUT == Alterar
 * DELETE == Deletar
 * PATCH == Alteração Específica
 * 
 * use https://insomnia.rest/download/core/? for test api resources
 */
// app.get("/", (request, response) =>{
//     return response.send("Use default requests");
// });
// app.post("/", (request, response) =>{
//     return response.json({message: "Dados salvos com sucesso"});
// });
//  app.get("/users", (request, response) =>{
    
//     //return response.send("Hello World - NLW04"); formato simples abaixo, formato json
//     return response.json({
//         message: "Hello World - NLW04",
//         request: "Users"
//     });
// });

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Server is Running!"))