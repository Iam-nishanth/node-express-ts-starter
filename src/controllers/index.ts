import { Request, Response } from 'express';

const Main = {
    users: async (req: Request, res: Response) => {
        const data = [
            {
                id: 1,
                name: 'Nishanth'
            },
            {
                id: 2,
                name: 'Nishanth'
            },
            {
                id: 3,
                name: 'Nishanth'
            }
        ];

        return res.status(200).json({ users: data });
    }
};

export default Main;
