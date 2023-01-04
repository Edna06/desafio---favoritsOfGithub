// classe que vai conter a lógica dos dados (responsável por fazer a lógica dos dados ou guardar os dados)

class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)

    this.load()
  }

  load() {
    this.entries = [
      {
        login: 'maykbrito',
        name: 'Mayk Brito',
        public_repos: '75',
        followers: '120000'
      },
      {
        login: 'diego3g',
        name: 'Diego Fernandes',
        public_repos: '95',
        followers: '190000'
      }
    ]
  }

  
  delete(user) {
const filteredEntries = this.entries
.filter(entry => entry.login !== user.login)
  
  console.log(filteredEntries)

  }
}

// classe que vai criar a visualização e eventos do HTML (responsável por construir a tabela)
export class FavoritesViews extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  update() {
    this.removeAllTr()

    this.entries.forEach(user => {
      const row = this.createRow() 

      row.querySelector('.user img').src = `http://github.com/${user.login}.png`
      row.querySelector('.user img').textContent = `foto de ${user.name}`
      row.querySelector('a').href = `http://github.com/${user.login}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

     
      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('tem certeza que deseja remover o usuário?')
      
        if(isOk == true) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td class="user">
    <img src="http://github.com/diego3g.png" alt="foto do github" />
    <a href="http://github.com/diego3g" target="_blank">
    <p>Diego Fernandes</p>
    <span>diego3g</span>
    </a>
    </td>
    
    <td class="repositories">48</td>
    <td class="followers">22503</td>
    <td> <button  class="remove">Remover</button></td>
    `
    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }
}
