import { Injectable } from "@angular/core";

export interface Livro {
  id: number; titulo: string; autor: string; genero: string;
  anoPublicacao: number; sinopse: string; opiniao: string;
  citacao: string; classificacao: number; lido: boolean; imagem?: string;
}

@Injectable({ providedIn: "root" })
export class LivrosService {
  private livros: Livro[] = [
    { id:1, titulo:"O Nome da Rosa", autor:"Umberto Eco", genero:"Policial", anoPublicacao:1980,
      sinopse:"Um monge franciscano investiga mortes misteriosas num mosteiro medieval. Combina filosofia, teologia e suspense.",
      opiniao:"Leitura densa mas fascinante. O final surpreendeu-me.",
      citacao:"Os livros não foram feitos para que acreditemos no que dizem, mas para que os examinemos.",
      classificacao:5, lido:true, imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB7AcsPjBkMI-9_jUAbwsAQQVt6-60013oD0CpdMv6PQ&s=10" },
    { id:2, titulo:"Cem Anos de Solidão", autor:"Gabriel García Márquez", genero:"Romance", anoPublicacao:1967,
      sinopse:"A saga da família Buendía ao longo de sete gerações em Macondo. Romance fundador do realismo mágico.",
      opiniao:"Difícil de entrar no início, mas depois impossível parar.",
      citacao:"Era tão bela que até a sua memória era esquecida pelos homens.",
      classificacao:5, lido:true, imagem:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGIQD738n_3fd_jsII7L4orwdDtS0tePsu9rQdJOb8HiIx-u_WHcT1ASsdVOrIT8Xx7WSDuTg1mZiQmZhlIrbELApUkLsme2d9csUwoTnmpTBLMNuaaj5FbjZgVt1ESWokQx6Z6tI&usqp=CAc" },
    { id:3, titulo:"Duna", autor:"Frank Herbert", genero:"Ficção Científica", anoPublicacao:1965,
      sinopse:"No planeta deserto Arrakis, Paul Atreides enfrenta traição, guerra e um destino profético.",
      opiniao:"A construção do mundo é extraordinária. Um épico de ficção científica.",
      citacao:"Tenho de não ter medo. O medo é o assassino da mente.",
      classificacao:5, lido:true, imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirnKjJJoZK584UOx-JwpqGfsTGn6qhVv7VvkipGUjqw&s=10" },
    { id:4, titulo:"1984", autor:"George Orwell", genero:"Ficção Científica", anoPublicacao:1949,
      sinopse:"Numa sociedade totalitária vigiada pelo Grande Irmão, Winston Smith arrisca tudo ao apaixonar-se por Júlia.",
      opiniao:"Perturbador e profético. Cada vez que vejo notícias sobre vigilância, penso neste livro.",
      citacao:"A guerra é paz. A liberdade é escravidão. A ignorância é poder.",
      classificacao:5, lido:true, imagem:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTze9XRyca_vFmUJE8yVk7TuK6sYIt1JGgsyMEs2fFxsFGRpPGo-IWkegJCBCBBvw3bF96aW5qlExnffMaUGZkKgjCccLJYOx7i8P9GbcHXI6jYKDs1OKDsGg&usqp=CAc" },
    { id:5, titulo:"O Senhor dos Anéis", autor:"J.R.R. Tolkien", genero:"Fantasia", anoPublicacao:1954,
      sinopse:"Frodo parte numa jornada para destruir o Um Anel, acompanhado por heróis da Terra-Média.",
      opiniao:"A fundação de toda a fantasia moderna. O worldbuilding de Tolkien é inigualável.",
      citacao:"Não é o poder que revela o carácter de um homem, mas as suas escolhas.",
      classificacao:5, lido:true, imagem:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIG9WQ15ZBfwEOCaU90jZTtab4uBkVDT9kQImTzZMZ9WymzgTXPQRXvVl2TKuTMzo5tyHZ2d8gy1R2BwO5gK_QX9m2so8oHWRibEWnWU1ooBE5piVI4GRK&usqp=CAc" },
    { id:6, titulo:"Crime e Castigo", autor:"Fiódor Dostoiévski", genero:"Romance", anoPublicacao:1866,
      sinopse:"Raskólnikov comete um crime e debate-se com a culpa e as consequências psicológicas.",
      opiniao:"Ainda por ler. Antecipo muito a psicologia dos personagens de Dostoiévski.",
      citacao:"", classificacao:0, lido:false, imagem:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQXL0ysYZcLa8tEvRW5HaudKk-eKkSyGLZD7bxe7u8wpyNsdktYjoP5YLBP0OVTc0DMtCy--Tkz6lvqZ7fIhDOdiwSOe_n_f6OL48BqOyVmKQJ1S83fssQ9&usqp=CAc" },
    { id:7, titulo:"O Alquimista", autor:"Paulo Coelho", genero:"Autoajuda", anoPublicacao:1988,
      sinopse:"Santiago segue os seus sonhos e parte em busca de um tesouro no Egito.",
      opiniao:"Ainda por ler. Ouço falar muito bem desta obra.",
      citacao:"", classificacao:0, lido:false, imagem:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcThEtfXOylgz2OpqTWPm2nEyBXqXySSCqS4174pj3gx42OFCja4-3J-GGBEOv99bUVT9zm4gh2TSt6heRrByFPhjaYPqn-O62A_6hU-po4M56FZT9djm-ih&usqp=CAc" },
    { id:8, titulo:"O Apanhador no Centeio", autor:"J.D. Salinger", genero:"Romance", anoPublicacao:1951,
      sinopse:"Holden Caulfield vagueia por Nova Iorque numa busca pela autenticidade.",
      opiniao:"A voz do narrador é única. A crítica à hipocrisia da sociedade ainda ressoa hoje.",
      citacao:"O que me mata é um livro que, quando acabas, desejarias que o autor fosse teu amigo.",
      classificacao:4, lido:true, imagem:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRXIJ-TDhW_tyukFh4stBfyo6xTHrbh1I5dF0tb4gYv75EiPmW4H3AGINiI8-NcN_GATTjwWGkhVUl8suxBsdDBPEbpB_ExUkA0GJ2F7UwAT2Bn8Ih3ux2oxQ&usqp=CAc" },
  ];

  getTodos(): Livro[]                   { return this.livros; }
  getLidos(): Livro[]                   { return this.livros.filter(l => l.lido); }
  getPorId(id: number): Livro|undefined { return this.livros.find(l => l.id === id); }
  getGeneros(): string[]                { return [...new Set(this.livros.map(l => l.genero))].sort(); }
  getPorGenero(g: string): Livro[]      { return this.livros.filter(l => l.genero === g); }
  getLivrosComCitacao(): Livro[]        { return this.livros.filter(l => l.citacao.trim() !== ""); }
  contarPorGenero(g: string): number    { return this.getPorGenero(g).length; }
  toggleLido(id: number): void          { const l = this.getPorId(id); if (l) l.lido = !l.lido; }
  emojiGenero(g: string): string {
    const m: {[k:string]:string} = { "Romance":"💕","Policial":"🔍","Ficção Científica":"🚀","Fantasia":"🧙","Autoajuda":"💡","História":"📜","Aventura":"🗺️" };
    return m[g] || "📚";
  }
}
