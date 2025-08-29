import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Search, 
  Plus, 
  Filter, 
  Download,
  Edit,
  Trash2,
  Package,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

export default function Warehouse() {
  const [searchTerm, setSearchTerm] = useState("");

  const inventoryItems = [
    {
      id: "ITM-001",
      name: "Kabel NYAF 2.5mm",
      category: "Kabel",
      stock: 500,
      minStock: 100,
      unit: "meter",
      location: "A1-01",
      lastUpdated: "2024-01-15",
      status: "normal"
    },
    {
      id: "ITM-002", 
      name: "MCB 20A Schneider",
      category: "Circuit Breaker",
      stock: 75,
      minStock: 50,
      unit: "pcs",
      location: "B2-05",
      lastUpdated: "2024-01-14",
      status: "normal"
    },
    {
      id: "ITM-003",
      name: "Trafo 50KVA",
      category: "Transformator",
      stock: 8,
      minStock: 5,
      unit: "unit",
      location: "C1-03",
      lastUpdated: "2024-01-13",
      status: "normal"
    },
    {
      id: "ITM-004",
      name: "Kabel NYM 3x2.5",
      category: "Kabel",
      stock: 15,
      minStock: 50,
      unit: "meter",
      location: "A1-02",
      lastUpdated: "2024-01-12",
      status: "low"
    },
    {
      id: "ITM-005",
      name: "Panel Box 12 Way",
      category: "Panel",
      stock: 0,
      minStock: 10,
      unit: "pcs",
      location: "B1-08",
      lastUpdated: "2024-01-11",
      status: "empty"
    },
    {
      id: "ITM-006",
      name: "Kontaktor 25A",
      category: "Kontaktor",
      stock: 32,
      minStock: 20,
      unit: "pcs",
      location: "B3-02",
      lastUpdated: "2024-01-10",
      status: "normal"
    }
  ];

  const getStatusBadge = (status: string, stock: number, minStock: number) => {
    if (stock === 0) {
      return <Badge variant="destructive" className="text-xs">Kosong</Badge>;
    } else if (stock <= minStock) {
      return <Badge variant="secondary" className="text-xs bg-warning/20 text-warning">Stok Rendah</Badge>;
    } else {
      return <Badge variant="default" className="text-xs bg-success/20 text-success">Normal</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    if (status === "empty") {
      return <AlertTriangle className="w-4 h-4 text-destructive" />;
    } else if (status === "low") {
      return <AlertTriangle className="w-4 h-4 text-warning" />;
    } else {
      return <CheckCircle className="w-4 h-4 text-success" />;
    }
  };

  const filteredItems = inventoryItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manajemen Gudang</h1>
          <p className="text-muted-foreground">Kelola inventaris dan stok barang</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90">
            <Plus className="w-4 h-4 mr-2" />
            Tambah Item
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Item</CardTitle>
            <Package className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inventoryItems.length}</div>
            <p className="text-xs text-muted-foreground">Jenis item berbeda</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stok Normal</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              {inventoryItems.filter(item => item.status === "normal").length}
            </div>
            <p className="text-xs text-muted-foreground">Item dengan stok cukup</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stok Rendah</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">
              {inventoryItems.filter(item => item.status === "low").length}
            </div>
            <p className="text-xs text-muted-foreground">Perlu restock segera</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stok Kosong</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              {inventoryItems.filter(item => item.status === "empty").length}
            </div>
            <p className="text-xs text-muted-foreground">Item habis</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Daftar Inventaris</CardTitle>
          <CardDescription>Kelola dan monitor semua item di gudang</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari berdasarkan nama, kategori, atau ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Inventory Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead>Stok</TableHead>
                  <TableHead>Lokasi</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Update Terakhir</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        {getStatusIcon(item.status)}
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.id}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{item.stock} {item.unit}</p>
                        <p className="text-xs text-muted-foreground">Min: {item.minStock}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">{item.location}</Badge>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(item.status, item.stock, item.minStock)}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {item.lastUpdated}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}