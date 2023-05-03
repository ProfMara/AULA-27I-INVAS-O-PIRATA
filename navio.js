class Navio{
    constructor(x,y,raio){
        //adiciona a prop corpo no objeto
        this.body = Bodies.circle(x,y,raio);
        //adiciona esse corpo no mundo
        World.add(world, this.body);
        //adiciona a prop imagem
        this.imagem = loadImage("navio.png");
        this.r = raio;
        
    }
    remove(n){
        //adicionar um delay de 1,5s
        //adicionar um intervalo de tempo
        //manda o computador esperar para executar outra função
        setTimeout(()=>{
            //tirar o corpo do mundo
            World.remove(world, navios[n].body)
            //deletar o objeto da matriz
            delete navios[n];
        }, 1500 );
    
    }
   
    show(){
        //facilita sua vida
        var pos = this.body.position;
       
        //atualizar as configurações
        push ();
        //posiciona as imagens pelo centro
        imageMode (CENTER);
        //coloca a imagem
        image (this.imagem, pos.x, pos.y, this.r*2, this.r*2)

        //voltar para as configurações antigas
        pop ()
    }
}