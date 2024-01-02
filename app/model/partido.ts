export interface Partido{
    id: string,
    nome: string,
    sigla: string,
    uri: string,
    status: {
        numeroEleitoral: number,
        situacao: string,
        totalMembros: string,
        totalPosse: string
    }
}