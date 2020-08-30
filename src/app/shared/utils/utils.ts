export class utils {
    static sanitazeAddress(address: string) {
        return address ? address.split(' ').join('+'): '';
    }

    static milesToMtrs(number: number){
        return number * 1609.34;
    }
}