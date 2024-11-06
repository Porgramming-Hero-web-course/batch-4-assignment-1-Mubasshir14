{
    // 

    type Rectangle = {
        shape: 'rectangle';
        width: number;
        height: number;
    }

    type Circle = {
        shape: 'circle';
        radius: number;
    }

    type Shape = Circle | Rectangle;


    function calculateShapeArea(shape: Shape): number {
        if (shape.shape === 'rectangle') {
            return shape.height * shape.width;
        }
        else if (shape.shape === 'circle') {
            return Math.PI * shape.radius * shape.radius;
        }
        throw new Error('Unknown Shape');
    }

    // const circle: Circle = {
    //     shape: 'circle',
    //     radius: 4
    // };

    // const rectangle: Rectangle = {
    //     shape: 'rectangle',
    //     width: 4,
    //     height: 6
    // }

    // const result1 = calculateShapeArea(circle);
    // const result2 = calculateShapeArea(rectangle);

    // console.log("circle:", result1, "rectangle:", result2);

    // 
}
