export class NumberUtils {
  static isArmstrong(num: number): boolean {
    const digits = String(num).split("");
    const power = digits.length;
    const sum = digits.reduce(
      (acc, digit) => acc + Math.pow(Number(digit), power),
      0
    );
    return sum === num;
  }

  static isPrime(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  static isPerfect(num: number): boolean {
    if (num < 1) return false;
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) sum += i;
    }
    return sum === num;
  }

  static getDigitSum(num: number): number {
    return String(num)
      .split("")
      .reduce((acc, digit) => acc + Number(digit), 0);
  }

  static getProperties(num: number): string[] {
    const properties: string[] = [];

    if (this.isArmstrong(num)) {
      properties.push("armstrong");
    }

    properties.push(num % 2 === 0 ? "even" : "odd");

    return properties;
  }
}
