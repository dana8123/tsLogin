import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Photo } from '../photo/photo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 15,
  })
  userId: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany((type) => Photo, (photo) => photo.user)
  photo: Photo[];
}
