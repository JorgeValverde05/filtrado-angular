import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-destinos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './destinos.html',
  styleUrls: ['./destinos.css']
})
export class DestinosComponent {
  // Modelos de filtrado
  textoBusqueda: string = '';
  continenteSeleccionado: string = '';
  tipoSeleccionado: string = '';
  rangoPrecioSeleccionado: string = '';

  // Diferentes datos
  destinos = [
    {
      nombre: 'París',
      pais: 'Francia',
      continente: 'Europa',
      tipo: 'Ciudad',
      precio: 900,
      imagen: 'assets/images/destinos/paris.jpg'
    },
    {
      nombre: 'Madrid',
      pais: 'España',
      continente: 'Europa',
      tipo: 'Ciudad',
      precio: 1200,
      imagen: 'assets/images/destinos/madrid.jpg'
    },
    {
      nombre: 'Venecia',
      pais: 'Italia',
      continente: 'Europa',
      tipo: 'Ciudad',
      precio: 450,
      imagen: 'assets/images/destinos/venecia.jpg'
    },
    {
      nombre: 'Tokio',
      pais: 'Japón',
      continente: 'Asia',
      tipo: 'Ciudad',
      precio: 1500,
      imagen: 'assets/images/destinos/tokio.jpg'
    },
    {
      nombre: 'Cancún',
      pais: 'México',
      continente: 'América',
      tipo: 'Playa',
      precio: 800,
      imagen: 'assets/images/destinos/cancun.jpg'
    },
    {
      nombre: 'Lisboa',
      pais: 'Portugal',
      continente: 'Europa',
      tipo: 'Ciudad',
      precio: 1100,
      imagen: 'assets/images/destinos/lisboa.jpg'
    },
    {
      nombre: 'Roma',
      pais: 'Italia',
      continente: 'Europa',
      tipo: 'Ciudad',
      precio: 700,
      imagen: 'assets/images/destinos/roma.jpg'
    },
    {
      nombre: 'Pyongyang',
      pais: 'Korea del Norte',
      continente: 'Asia',
      tipo: 'Aventura',
      precio: 1400,
      imagen: 'assets/images/destinos/piongiang.jpg'
    },
    {
      nombre: 'Bangkok',
      pais: 'Tailandia',
      continente: 'Asia',
      tipo: 'Ciudad',
      precio: 600,
      imagen: 'assets/images/destinos/bangkok.jpg'
    },
    {
      nombre: 'Lima',
      pais: 'Perú',
      continente: 'América',
      tipo: 'Aventura',
      precio: 150,
      imagen: 'assets/images/destinos/lima.jpg'
    },
    {
      nombre: 'Sídney',
      pais: 'Australia',
      continente: 'Oceanía',
      tipo: 'Ciudad',
      precio: 1600,
      imagen: 'assets/images/destinos/sidney.jpg'
    },
    {
      nombre: 'Niamey',
      pais: 'Niger',
      continente: 'África',
      tipo: 'Aventura',
      precio: 1300,
      imagen: 'assets/images/destinos/niamey.jpg'
    }
  ];

  // Método de filtrado
  get destinosFiltrados() {
    return this.destinos.filter(destino => {
      const texto = this.textoBusqueda.toLowerCase();
      const coincideTexto = destino.nombre.toLowerCase().includes(texto) || destino.pais.toLowerCase().includes(texto);

      const coincideContinente =
        !this.continenteSeleccionado || destino.continente === this.continenteSeleccionado;

      const coincideTipo =
        !this.tipoSeleccionado || destino.tipo === this.tipoSeleccionado;

      const coincidePrecio = this.filtrarPorPrecio(destino.precio);

      return coincideTexto && coincideContinente && coincideTipo && coincidePrecio;
    });
  }

  // Filtrado por precio
  filtrarPorPrecio(precio: number): boolean {
    if (!this.rangoPrecioSeleccionado) return true;

    switch (this.rangoPrecioSeleccionado) {
      case 'economico':
        return precio < 500;
      case 'moderado':
        return precio >= 500 && precio <= 1000;
      case 'premium':
        return precio > 1000;
      default:
        return true;
    }
  }

  // Resetear los filtros
  resetearFiltros() {
    this.textoBusqueda = '';
    this.continenteSeleccionado = '';
    this.tipoSeleccionado = '';
    this.rangoPrecioSeleccionado = '';
  }
}
