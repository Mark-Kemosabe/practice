class Shape {
    constructor(public name: string) {}
    
    area(): number {
        // Calculate and return the area of the shape.
    }
    
    perimeter(): number {
        // Calculate and return the perimeter of the shape.
    }
}

class Circle extends Shape {
    constructor(public name: string, public radius: number) {
        super(name);
    }
    
    area(): number {
        // Implement the area calculation for a circle.
    }
    
    perimeter(): number {
        // Implement the perimeter calculation for a circle.
    }
}

class Rectangle extends Shape {
    constructor(public name: string, public width: number, public height: number) {
        super(name);
    }
    
    area(): number {
        // Implement the area calculation for a rectangle.
    }
    
    perimeter(): number {
        // Implement the perimeter calculation for a rectangle.
    }
}

class Triangle extends Shape {
    constructor(public name: string, public side1: number, public side2: number, public side3: number) {
        super(name);
    }
    
    area(): number {
        // Implement the area calculation for a triangle.
    }
    
    perimeter(): number {
        // Implement the perimeter calculation for a triangle.
    }
}

function printShapeDetails(shape: Shape) {
    console.log(`Shape: ${shape.name}`);
    console.log(`Area: ${shape.area()}`);
    console.log(`Perimeter: ${shape.perimeter()}`);
}

// Create instances of different shapes and print their details.
const circle = new Circle("Circle", 5);
const rectangle = new Rectangle("Rectangle", 4, 6);
const triangle = new Triangle("Triangle", 3, 4, 5);

printShapeDetails(circle);
printShapeDetails(rectangle);
printShapeDetails(triangle);
