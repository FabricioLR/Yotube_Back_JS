const User = require("../models/User")
const addToHistoric = require("../services/historic/AddToHistoric")

class AuthController {
    async AddToHistoric(request, response){
        const { userId, videoId } = request.body

        try {
           // const AddToHistoricResponse = await addToHistoric({
           //     userId, videoId
           // })

            console.log(await User.findByPk(1, { include: { association: "historic-user" }}))
            
           // return response.status(200).send({ success: true, historic: AddToHistoricResponse })
        } catch (error) {
            console.log("error" + error)
            return response.status(400).send({ error: "add to historic failed" })
        } 
    }
    async GetHistoric(request, response){
        const { userId } = request.body

        try {
            const AddToHistoricResponse = await addToHistoric({
                userId, videoId
            })

            return response.status(200).send({ success: true, historic: AddToHistoricResponse })
        } catch (error) {
            console.log(error)
            return response.status(400).send({ error: "add to historic failed" })
        }
    }
}

module.exports = AuthController