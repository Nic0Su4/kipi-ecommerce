export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      detalles_pedido: {
        Row: {
          cantidad: number;
          id: number;
          pedido_id: number;
          producto_id: number;
        };
        Insert: {
          cantidad: number;
          id?: never;
          pedido_id: number;
          producto_id: number;
        };
        Update: {
          cantidad?: number;
          id?: never;
          pedido_id?: number;
          producto_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "detalles_pedido_pedido_id_fkey";
            columns: ["pedido_id"];
            isOneToOne: false;
            referencedRelation: "pedidos";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "detalles_pedido_producto_id_fkey";
            columns: ["producto_id"];
            isOneToOne: false;
            referencedRelation: "productos";
            referencedColumns: ["id"];
          }
        ];
      };
      pedidos: {
        Row: {
          created_at: string | null;
          estado: string;
          id: number;
          qr_code: string;
          tienda_id: number;
          usuario_id: number;
        };
        Insert: {
          created_at?: string | null;
          estado: string;
          id?: never;
          qr_code: string;
          tienda_id: number;
          usuario_id: number;
        };
        Update: {
          created_at?: string | null;
          estado?: string;
          id?: never;
          qr_code?: string;
          tienda_id?: number;
          usuario_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "pedidos_tienda_id_fkey";
            columns: ["tienda_id"];
            isOneToOne: false;
            referencedRelation: "tiendas";
            referencedColumns: ["id"];
          }
        ];
      };
      productos: {
        Row: {
          created_at: string | null;
          descripcion: string | null;
          id: number;
          nombre: string;
          precio: number;
          tienda_id: number;
        };
        Insert: {
          created_at?: string | null;
          descripcion?: string | null;
          id?: never;
          nombre: string;
          precio: number;
          tienda_id: number;
        };
        Update: {
          created_at?: string | null;
          descripcion?: string | null;
          id?: never;
          nombre?: string;
          precio?: number;
          tienda_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "productos_tienda_id_fkey";
            columns: ["tienda_id"];
            isOneToOne: false;
            referencedRelation: "tiendas";
            referencedColumns: ["id"];
          }
        ];
      };
      tiendas: {
        Row: {
          created_at: string | null;
          direccion: string;
          gerente_id: number;
          id: number;
          nombre: string;
          tipo_id: number;
        };
        Insert: {
          created_at?: string | null;
          direccion: string;
          gerente_id: number;
          id?: never;
          nombre: string;
          tipo_id: number;
        };
        Update: {
          created_at?: string | null;
          direccion?: string;
          gerente_id?: number;
          id?: never;
          nombre?: string;
          tipo_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "tiendas_tipo_id_fkey";
            columns: ["tipo_id"];
            isOneToOne: false;
            referencedRelation: "tipos_tiendas";
            referencedColumns: ["id"];
          }
        ];
      };
      tipos_tiendas: {
        Row: {
          id: number;
          nombre: string;
        };
        Insert: {
          id?: never;
          nombre: string;
        };
        Update: {
          id?: never;
          nombre?: string;
        };
        Relationships: [];
      };
      usuarios: {
        Row: {
          contrasena: string;
          correo_electronico: string;
          created_at: string | null;
          nombre: string;
          rol: string;
          uid: string;
        };
        Insert: {
          contrasena: string;
          correo_electronico: string;
          created_at?: string | null;
          nombre: string;
          rol: string;
          uid: string;
        };
        Update: {
          contrasena?: string;
          correo_electronico?: string;
          created_at?: string | null;
          nombre?: string;
          rol?: string;
          uid?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;
