import { BarberDto } from '../api';

export interface Barber {
  id: number;
  name: string;
  description: string;
  picture: string | null;
}

export function barberFromDto(dto: BarberDto) {
  const barber: Barber = {
    id: dto.id,
    name: dto.name,
    description: dto.description,
    picture: dto.picture,
  };
  return barber;
}
