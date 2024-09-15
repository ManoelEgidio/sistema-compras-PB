import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

function CadastroFornecedor() {
  const [fornecedor, setFornecedor] = useState({ nome: '', cnpj: '', endereco: '' });

  const handleChange = (e) => {
    setFornecedor({ ...fornecedor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fornecedor);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Cadastro de Fornecedor
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nome do Fornecedor"
          name="nome"
          value={fornecedor.nome}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="CNPJ"
          name="cnpj"
          value={fornecedor.cnpj}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Endereço"
          name="endereco"
          value={fornecedor.endereco}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Cadastrar Fornecedor
        </Button>
      </form>
    </Container>
  );
}

export default CadastroFornecedor;
