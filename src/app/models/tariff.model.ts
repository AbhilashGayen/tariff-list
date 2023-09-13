export interface Tariff {
    name: string;
    speeds: {
        upload: number;
        download: number;
    };
    benefits: string[];
    cost: number;
}