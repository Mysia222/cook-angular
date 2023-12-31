import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

// retrieve env vars
dotenv.config();

class Auth {
    constructor() {}

    static async hashPassword(pwd: any) {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        return bcrypt.hashSync(pwd, salt);
    }

    static async matchPasswords(requestPwd: any, userPwd: any) {
        return bcrypt.compare(requestPwd, userPwd);
    }

    static generateJwt({ name, email, userId }: any) {
        return jwt.sign({ userId, email, username: name }, process.env.SIGNATURE_KEY as string, { expiresIn: '30 days' });
    }

    //   static getJwtPayload(token: string) {
    //     return jwt.verify(token, process.env.TOKEN_SECRET);
    //   }

    //   static getUserId({ req, authToken}: any) {
    //     if (req.request?.headers) {
    //       const authHeader = req.request.headers.authorization
    //       if (authHeader) {
    //         const token = authHeader.replace('Bearer ', '')
    //         if (!token) {
    //           return null
    //         }
    //         const { userId } = this.getJwtPayload(token)
    //         return userId;
    //       }
    //     } else if (authToken) {
    //       const { userId } = this.getJwtPayload(authToken)
    //       return userId
    //     }

    //     return null
    //   }
}

export default Auth;
