CREATE SCHEMA `cursonode` ;

CREATE TABLE `cursonode`.`tb_pessoa` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(70) NOT NULL,
  `cpf` VARCHAR(15) NOT NULL,
  `rg` VARCHAR(15) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `obs` VARCHAR(200) NULL,
  PRIMARY KEY (`id`)); 