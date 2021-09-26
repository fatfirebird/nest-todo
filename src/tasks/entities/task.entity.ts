import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TaskStatus } from '../task.types';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('text')
  public title: string;

  @Column('text', { nullable: true })
  public description: string;

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.TODO })
  public status: TaskStatus;

  @CreateDateColumn({ type: 'timestamp', default: Date.now() })
  public createdAt: number;

  @UpdateDateColumn({ type: 'timestamp', default: Date.now() })
  public updatedAt: number;
}
