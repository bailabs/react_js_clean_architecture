import Plant from "../../domain/entities/Plant"
import PlantRepository from "../../domain/repositories/PlantRepository"

export default class PlantRepositoryImpl implements PlantRepository {
    jsonUrl =
        "https://gist.githubusercontent.com/janithl/6bfbd787a0361c170ac760e8fb5ba0fd/raw/a0ffacb7c0fc21a0266371f632cf4107f80362f4/itemlist.json"

    async GetPlants(): Promise<Plant[]> {
        const res = await fetch(this.jsonUrl)
        const jsonData = await res.json()
        return jsonData.map((item: Plant) => ({ id: item.id, name: item.name }))
    }
}
