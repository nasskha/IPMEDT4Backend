<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voortgang extends Model
{
    use HasFactory;
    public $table = 'voortgangen';

    protected $fillable = [
        'user_id',
        'datum',
        'emoji',
        'progress',
    ];
}
