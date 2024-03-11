import { NextApiHandler } from 'next'
type ApiMethods = 'GET' | 'PUT' | 'POST' | 'DELETE'
type CreateApiHandlerArgs = Partial<Record<ApiMethods, NextApiHandler>>
export const createApiHandler = <T>(args: CreateApiHandlerArgs): NextApiHandler<T> => {
    return (req, res) => {
        const method = req.method as ApiMethods
        if (!method || !args[method]) {
            return res.status(405).end(`Method ${method} Not Allowed`)
        }
        return args[method]!(req, res)
    }
}
