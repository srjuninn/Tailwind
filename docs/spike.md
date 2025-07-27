# Estudo de Caso – Tailwind CSS: abordagem utility-first sem necessidade de JS.

> **Aluno(a):** Ryan Ferreira da Silva  
> **Turma:** Desenvolvedor Front-End  
> **Data:** 28/07/2025

---

## 1. Introdução

Tailwind é um framework que é usado em aplicações da web, onde é usado classes unitárias no html pra poder estilizar sem necessitar de um arquivo.css .

---

## 2. Aplicações e Benefícios

- O tailwind é ultilizado em aplicações na web.
- Ele resolve problemas de personalização, porque o bootstrap ele limita a personalização com estilos limitados.
- Facilidade na manutenção do código, agilidade na hora de estilizar e sem bagunça.

---

## 3. Diferenças e Comparações

- **Tailwind CSS**  
  - Estilo “utility-first” (você monta o layout com classes específicas)  
  - Altamente personalizável  
  - Ótimo pra quem quer controle total e designs únicos  
  - Curva de aprendizado maior, mas muito leve e eficiente  

- **Bootstrap**  
  - Usa componentes prontos e estilizados  
  - Fácil de usar, ótimo pra prototipar rápido  
  - Menos flexível, mas economiza tempo  
  - Pode ser mais pesado se importar tudo  


---

## 4. Exemplo Prático

``` html
<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind</title>
  <link rel="stylesheet" href="./dist/output.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>
<body>
    <header class="h-20 flex justify-around items-center bg-neutralSilver">
        <img src="./src/assets/image/Logo.svg" alt="logotipo da empresa nexcent">
        <nav>
            <ul class="flex gap-12">
                <li>
                    <a href="" class="font-semibold text-[#18191F]">Home</a>
                </li>
                <li>
                    <a href="">Service</a>
                </li>
                <li>
                    <a href="">Feature</a>
                </li>
                <li>
                    <a href="">Product</a>
                </li>
                <li>
                    <a href="">Testimonial</a>
                </li>
                <li>
                    <a href="">FAQ</a>
                </li>
            </ul>
        </nav>
        <div class="buttonsWrapper">
            <button class="py-10px px-10px text-primary">Login</button>
            <button class="py-10px px-20px rounded-md bg-primary text-white">Sign Up</button>
        </div>
    </header>
    <main class="flex justify-center items-center gap-[104px] bg-neutralSilver py-24">
        <aside class="flex flex-col gap-4">
            <h1 class="font-semibold text-[64px] w-[657px] text-[#4D4D4D]">Lessons and insights <span class="text-primary">from 8 years</span></h1>
            <p class="text-[#717171]">Where to grow your business as a photographer: site or social media?</p>
            <button class="mt-4 w-32 py-[14px] px-[32px] bg-primary rounded text-white">Register</button>
        </aside>
        <img src="./src/assets/image/heroMainImage.svg" alt="imagem ilustrativa de um homem usando o notebook">
    </main>
</body>
</html>
```

---

## 5. Conclusão

O tailwind é um framework muito legal e divertido de usar porque facilita a manutenção do código, não fica bagunçado e agiliza muito a estilização, eu recomendo usar o tailwind pra estilizar algo rapido, mas se precisar de algo mais complexo, recomendo usar o css mesmo que é mais garantido que vai funcionar.

---

## 6. Fontes utilizadas

- [Documentação do Tailwind](https://tailwindcss.com/docs/installation/using-vite)
- [Explicação de um vídeo no youtube](https://www.youtube.com/watch?v=dHwY5lRfkoQ)

---

## 7. Slides da Apresentação

📎 Link para os slides:
[Tailwind](https://www.canva.com/design/DAGuYKg6vNY/I8u1YlWjisPk4OGMFn8xxQ/edit?utm_content=DAGuYKg6vNY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

----
## 8. GitHub
[Ryan Silva](https://github.com/srjuninn/Tailwind) 
