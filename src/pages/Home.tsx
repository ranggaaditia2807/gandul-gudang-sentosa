import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Package, ArrowLeftRight, BarChart3, Users, Shield } from "lucide-react";
import warehouseHero from "@/assets/warehouse-hero.jpg";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div 
        className="relative h-96 rounded-xl overflow-hidden bg-gradient-hero flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.8), rgba(220, 38, 127, 0.8)), url(${warehouseHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-white space-y-4 max-w-2xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Sistem Manajemen Gudang
          </h1>
          <p className="text-xl text-white/90">
            PLN UPT Gandul - Mengelola inventaris dan transaksi dengan efisien
          </p>
          <div className="flex gap-4 justify-center mt-6">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Mulai Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Item</CardTitle>
            <Package className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,543</div>
            <p className="text-xs text-muted-foreground">+12% dari bulan lalu</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transaksi Hari Ini</CardTitle>
            <ArrowLeftRight className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">+23% dari kemarin</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nilai Inventaris</CardTitle>
            <BarChart3 className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp 2.4M</div>
            <p className="text-xs text-muted-foreground">+8% dari bulan lalu</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">User Aktif</CardTitle>
            <Users className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">3 admin, 21 user</p>
          </CardContent>
        </Card>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="shadow-soft hover:shadow-medium transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Manajemen Inventaris</CardTitle>
            <CardDescription>
              Kelola stok barang dengan sistem yang terintegrasi dan real-time
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="shadow-soft hover:shadow-medium transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
              <ArrowLeftRight className="w-6 h-6 text-success" />
            </div>
            <CardTitle>Tracking Transaksi</CardTitle>
            <CardDescription>
              Monitor semua transaksi masuk dan keluar dengan detail lengkap
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="shadow-soft hover:shadow-medium transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-accent" />
            </div>
            <CardTitle>Laporan Analitik</CardTitle>
            <CardDescription>
              Dapatkan insight mendalam dengan laporan dan analisis data
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="shadow-soft hover:shadow-medium transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-warning" />
            </div>
            <CardTitle>Kontrol Akses</CardTitle>
            <CardDescription>
              Sistem keamanan berlapis dengan role-based access control
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="shadow-soft hover:shadow-medium transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Multi Lokasi</CardTitle>
            <CardDescription>
              Mendukung pengelolaan gudang di berbagai lokasi PLN
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="shadow-soft hover:shadow-medium transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-success" />
            </div>
            <CardTitle>User Management</CardTitle>
            <CardDescription>
              Kelola user dan hak akses dengan sistem yang fleksibel
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}