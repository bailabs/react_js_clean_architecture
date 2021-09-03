import Plant from "../entities/Plant"

export default interface PlantRepository {
    GetPlants(): Promise<Plant[]>
}
