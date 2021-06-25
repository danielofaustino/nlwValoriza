import {
  MigrationInterface,
  PessimisticLockTransactionRequiredError,
  QueryRunner,
  TableColumn,
} from 'typeorm';

export class AlterUserAddPassword1624578755627 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'password',
        type: 'varchar',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'password');
  }
}
