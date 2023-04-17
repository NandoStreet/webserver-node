import http from 'http';

http.createServer( (req, res) => {

    //res.writeHead(200, {'Content-Type': 'application/json'});
    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    //res.writeHead(200, {'Content-Type': 'application/csv'});
    
    //res.write('id; nombre\n');
    //res.write('1; Fernando\n');
    //res.write('2; Tyrion\n');
    //res.write('3; Jon\n');
    //res.write('4; Daenerys\n');
    //res.end();

    console.log('Hola Mundo');


})
.listen( 8080 );

console.log('Escuchando el puerto', 8080 );
