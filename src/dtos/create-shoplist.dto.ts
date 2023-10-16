export class ListShopPerCountryDto {
    readonly id: string;
    readonly name: string;
}

export class CreateShopListDto {
    readonly countryName: string;
    readonly listShop: ListShopPerCountryDto[]
}
