export interface Service {
    code: string;
    name: string;
    price: number;
    active?: boolean;
};

export type CreateService = Omit<Service, 'createdAt'|'updatedAt'>;

export type UpdateService = Partial<CreateService>;
