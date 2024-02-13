import makeTransfersService from "../../services/transactions.services/makeTransfers.service";
import { Request, Response } from "express";

const makeTransfersController = async (req: Request, res: Response) => {
  const senderId = req.user.id;
  const makedTransfer = await makeTransfersService(
    senderId,
    req.body.recipientPix,
    req.body.amout
  );
  return res.status(200).json(makedTransfer);
};

export default makeTransfersController;
