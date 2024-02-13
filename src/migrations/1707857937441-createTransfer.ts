import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTransfer1707857937441 implements MigrationInterface {
    name = 'CreateTransfer1707857937441'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transfer" ("id" SERIAL NOT NULL, "senderId" uuid NOT NULL, "senderName" character varying NOT NULL, "recipientId" uuid NOT NULL, "recipientName" character varying NOT NULL, "amount" integer NOT NULL, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_780bd0b359a2b4576b2e3268600" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_6d9eb09fb37a1311682d1becabd" FOREIGN KEY ("recipientId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_6d9eb09fb37a1311682d1becabd"`);
        await queryRunner.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_780bd0b359a2b4576b2e3268600"`);
        await queryRunner.query(`DROP TABLE "transfer"`);
    }

}
