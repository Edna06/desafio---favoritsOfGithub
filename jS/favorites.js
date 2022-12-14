// parte lógica

export class Favotites {
  constructor(root) {
    this.root = document.querySelector(root)
  }
}

// parte visível

export class FavoritesView extends Favotites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')
  }

  update() {
    const row = this.createRow()

    row.querySelector('.user img').src = `http://github.com/${user.login}.png`
    row.querySelector('.user img').alt = ` foto de ${user.name}`
    row.querySelector('.user a').href = `http://github.com/${user.login}`
    row.querySelector('.user p').textContent = user.name
    row.querySelector('.user span').textContent = `/${user.login}`

    row.querySelector('.repositories').textContent = user.public_repos
    row.querySelector('.followers').textContent = user.followers

    row.querySelector('.remove').onclick = () => {
      const isOk = confirm('Tem certeza que deseja excluir esse usuário?')

      if (isOk === true) {
        this.delete(user)
      }
    }
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td class="user">
      <img src="http://github.com/Edna06" alt="foto de Edna Moreira" />
      <a href="http://github.com/Edna06" target="_blank">
       <p>Edna Maria</p>
        <span>/Edna06</span>
      </a>
    </td>

    <td class="repositories">32</td>
    <td class="followers">24</td>
    <td><button class="remove">Remover</button></td>
    `
    return tr
  }
}
