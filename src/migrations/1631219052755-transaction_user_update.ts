import {MigrationInterface, QueryRunner} from "typeorm";

export class transactionUserUpdate1631219052755 implements MigrationInterface {
    name = 'transactionUserUpdate1631219052755'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."transactions" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."transactions" ADD CONSTRAINT "UQ_6bb58f2b6e30cb51a6504599f41" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "public"."transactions" ADD CONSTRAINT "FK_6bb58f2b6e30cb51a6504599f41" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."transactions" DROP CONSTRAINT "FK_6bb58f2b6e30cb51a6504599f41"`);
        await queryRunner.query(`ALTER TABLE "public"."transactions" DROP CONSTRAINT "UQ_6bb58f2b6e30cb51a6504599f41"`);
        await queryRunner.query(`ALTER TABLE "public"."transactions" DROP COLUMN "userId"`);
    }

}
