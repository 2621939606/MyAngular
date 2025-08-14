class TestHelp {

    private listData: any[] = [];

    constructor() {
        this.listData = [1, 2, 3];
    }

    public getListData() {
        return this.listData;
    }

    public setListData(list: any[]) {
        this.listData = list;
    }
}