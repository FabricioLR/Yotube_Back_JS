const createUser = require("../services/user/CreateUser")
const authenticateUser = require("../services/user/AuthenticateUser")
const authenticateByToken = require("../services/user/AuthenticateByToken")
const changeUserImage = require("../services/user/ChangeUserImage")

class AuthController {
    async Register(request, response){
        const { email, nome, senha } = request.body

        try {
            const CreateUserResponse = await createUser({
                email, nome, senha, response
            })

            return response.status(200).send({ success: true, user: CreateUserResponse })
        } catch (error) {
            return response.status(400).send({ error: "register failed" })
        }
    }
    async Authenticate(request, response){
        const { email, senha } = request.body

        try {
            const AuthenticateUserResponse = await authenticateUser({
                email, senha, response
            })

            return response.status(200).send({ success: true, user: AuthenticateUserResponse })
        } catch (error) {
            return response.status(400).send({ error: "authenticate failed" })
        }
    }
    async AuthenticateByToken(request, response){
        const { userId } = request

        try {
            const AuthenticateByTokenResponse = await authenticateByToken({
                userId, response
            })

            return response.status(200).send({ success: true, user: AuthenticateByTokenResponse })
        } catch (error) {
            return response.status(400).send({ error: "authenticate by token failed" })
        }
    }
    async ChangeUserImage(request, response){
        const { url } = request.file
        const { userId } = request

        try {
            const ChangeUserImageResponse = await changeUserImage({
                url, userId, response
            })

            return response.status(200).send({ success: true })
        } catch (error) {
            return response.status(400).send({ error: "profile failed" })
        }
    }
}

module.exports = AuthController