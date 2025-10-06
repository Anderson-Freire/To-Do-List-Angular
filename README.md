# 🧾 To-Do List App (Angular)

Aplicação simples e elegante de lista de tarefas (**To-Do List**) desenvolvida em **Angular**, com suporte a adição, edição, exclusão, marcação de tarefas concluídas e filtragem entre tarefas **ativas**, **concluídas** e **todas**.

---

## 🚀 Tecnologias Utilizadas

- **Angular 18+**
- **TypeScript**
- **HTML5 / SCSS**
- **Bootstrap 5** (para estilização)
- **RxJS**
- **FormsModule** e **ReactiveFormsModule**

---

## 💡 Funcionalidades

✅ Adicionar novas tarefas  
✏️ Editar tarefas existentes  
🗑️ Excluir tarefas  
✔️ Marcar e desmarcar como concluídas  
🔍 Filtrar tarefas por status: todos, ativos ou concluídos  
🧹 Limpar todas as tarefas concluídas  
📄 Página “About” com informações do app  
🧭 Navegação entre rotas (`Home` e `About`) usando **Angular Router**

---

## 🏗️ Estrutura de Pastas

```
src/
├── app/
│ ├── components/
│ │ ├── header/
│ │ │ ├── header.component.ts
│ │ │ ├── header.component.html
│ │ │ └── header.component.scss
│ │ └── todo-item/
│ │ ├── todo-item.component.ts
│ │ ├── todo-item.component.html
│ │ └── todo-item.component.scss
│ ├── pages/
│ │ ├── home/
│ │ │ ├── home.component.ts
│ │ │ ├── home.component.html
│ │ │ └── home.component.scss
│ │ └── about/
│ │ ├── about.component.ts
│ │ ├── about.component.html
│ │ └── about.component.scss
│ ├── services/
│ │ └── todo.service.ts
│ ├── app-routing-module.ts
│ └── app.component.ts
│
├── assets/
├── styles.scss
└── main.ts
```

## 🎨 Estilo e UX

- Layout limpo e responsivo

- Botões de filtro com destaque ativo

- Espaçamento entre seções (cards, campos e botões)

- Ícones e feedback visual de ação (edição, exclusão e conclusão)

## 🧠 Conceitos Aprendidos / Aplicados

- Componentização no Angular

- Comunicação entre componentes com @Input() e @Output()

- Gerenciamento de estado simples com TodoService

- Rotas com RouterModule e routerLink

## 🤝 Contribuição

Sinta-se livre para abrir issues ou enviar pull requests com melhorias!

Desenvolvido por Anderson Freire 🚀
