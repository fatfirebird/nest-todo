import { TaskStatus } from 'src/tasks/task.types';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TaskTable1632674204922 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'task',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'text',
          },
          {
            name: 'description',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'enum',
            default: TaskStatus.TODO,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: Date.now(),
          },
          {
            name: 'editedAt',
            type: 'timestamp',
            default: Date.now(),
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('task');
  }
}
