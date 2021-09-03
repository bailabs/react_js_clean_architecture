import Plant from "../entities/Plant"
import PlantRepository from "../repositories/PlantRepository"

export default class PlantServiceImpl {
    plantRepo: PlantRepository

    constructor(ir: PlantRepository) {
        this.plantRepo = ir
    }

    async GetPlants(): Promise<Plant[]> {
        return this.plantRepo.GetPlants()
    }
}
