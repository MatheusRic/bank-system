import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { Transfer } from "../../entities/transfer.entity";
import AppError from "../../errors/appError";

const makeTransfersService = async (
  senderId: string,
  recipientPix: string,
  amount: number
): Promise<string | void> => {
  const userRepository = AppDataSource.getRepository(User);
  const findSender = await userRepository.findOneBy({ id: senderId });
  const findRecipient = await userRepository.findOneBy({ pix: recipientPix });

  if (!findSender || !findRecipient) {
    throw new AppError("incorret pix", 400);
  }

  if (senderId === findRecipient.id) {
    throw new AppError("voce nao pode enviar um pix para voce mesmo", 400);
  }

  try {
    // Iniciar transação
    await AppDataSource.transaction(async (transactionalEntityManager: any) => {
      // Verificar se o remetente possui saldo suficiente
      if (findSender.value < amount) {
        throw new AppError("Saldo insuficiente", 400);
      }

      // Atualizar saldos
      findSender.value -= amount;
      findRecipient.value += amount;

      // Salvar alterações nos usuários
      await transactionalEntityManager.save([findSender, findRecipient]);

      // Criar e salvar uma nova instância de Transfer
      const transfer = new Transfer();
      transfer.senderId = findSender.id;
      transfer.senderName = findSender.name;
      transfer.recipientId = findRecipient.id;
      transfer.recipientName = findRecipient.name;
      transfer.amount = amount;
      await transactionalEntityManager.save(transfer);
    });

    return `A ${findSender.name} enviou R$${amount} para ${findRecipient.name}`;
  } catch (error) {
    console.error("Erro ao transferir dinheiro:", error);
  }
};

export default makeTransfersService;
