import {
  DataTypes,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManySetAssociationsMixin,
  Model,
  Optional,
} from 'sequelize';

import db from '../db';
import { ClauseAttributes } from './ClauseAttributes';

// This line allows us to create an Album using Album.create() and not have to supply an id because it's optional
interface ClauseCreationAttributes extends Optional<ClauseAttributes, 'id'> {}

// This interface is the type of the sequelize model generated from db.define
class Clause
  extends Model<ClauseAttributes, ClauseCreationAttributes>
  implements ClauseAttributes
{
  // These are null assertions. It means that we can never let id, name or artwork be null
  id!: number;
  article!: number;
  section!: number;
  clause!: number;
  name: string;
  text!: string;

  // These are the sequelize generated timestamps
  readonly createdAt!: Date;
  readonly updatedAt!: Date;

  // Since TS cannot determine model association at compile time
  // we have to declare them here
  // these will not exist on the model until `Model.init` is called.
  public getSongs: HasManyGetAssociationsMixin<ClauseAttributes>;
  public setSongs: HasManySetAssociationsMixin<ClauseAttributes, number>;
  public addSong: HasManyAddAssociationMixin<ClauseAttributes, number>;
  public addSongs: HasManyAddAssociationsMixin<ClauseAttributes, number>;
  public removeSong: HasManyRemoveAssociationMixin<ClauseAttributes, number>;
  public removeSongs: HasManyRemoveAssociationsMixin<ClauseAttributes, number>;
  public hasSong: HasManyHasAssociationMixin<ClauseAttributes, number>;
  public hasSongs: HasManyHasAssociationsMixin<ClauseAttributes, number>;
  public countSongs: HasManyCountAssociationsMixin;
  public createSong: HasManyCreateAssociationMixin<ClauseAttributes>;
}

Clause.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    article: DataTypes.INTEGER,
    section: DataTypes.INTEGER,
    clause: DataTypes.INTEGER,
    name: { type: DataTypes.STRING },
    text: DataTypes.TEXT,
  },
  {
    tableName: 'clause',
    sequelize: db,
  }
);

export default Clause;
