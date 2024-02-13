import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1707169506421 implements MigrationInterface {
    name = 'CreateTables1707169506421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(150) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(150) NOT NULL, "pix" character varying(150) NOT NULL, "cpf" character varying(150) NOT NULL, "value" integer NOT NULL DEFAULT '1000', CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_2c894b6626bf2023bdeeb58f221" UNIQUE ("pix"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
